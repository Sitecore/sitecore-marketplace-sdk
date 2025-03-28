import type { Plugin } from '@hey-api/openapi-ts';
import type { Config } from './types';
import ts from 'typescript';

export const handler: Plugin.Handler<Config> = ({ context, plugin }) => {
  // client.gen file
  const file = context.files[plugin.output];

  file.import({
    module: '../client-sdk-fetch',
    name: 'clientSdkfetch',
  });

  // client export node
  const clientNode = file['_items'][file['_items'].length - 1];

  // Ensure clientNode is a VariableStatement
  if (!clientNode || !ts.isVariableStatement(clientNode)) {
    throw new Error('clientNode is not a valid VariableStatement');
  }

  // Get the VariableDeclaration from the declarationList
  const declarationList = clientNode.declarationList;
  const declarations = declarationList.declarations;
  if (!declarations || declarations.length === 0) {
    throw new Error('No declarations found in clientNode');
  }

  const variableDeclaration = declarations[0]; // Assuming the first declaration is the one we need
  if (!ts.isVariableDeclaration(variableDeclaration)) {
    throw new Error('The declaration is not a valid VariableDeclaration');
  }

  const initializer = variableDeclaration.initializer;
  if (!initializer || !ts.isCallExpression(initializer)) {
    throw new Error('VariableDeclaration initializer is not a CallExpression');
  }

  const createClientArgs = initializer.arguments;
  if (!createClientArgs || createClientArgs.length === 0) {
    throw new Error('createClient has no arguments');
  }

  const createConfigCall = createClientArgs[0];
  if (!ts.isCallExpression(createConfigCall)) {
    throw new Error('First argument of createClient is not a CallExpression');
  }

  const configObject = createConfigCall.arguments[0];
  if (!configObject || !ts.isObjectLiteralExpression(configObject)) {
    throw new Error('createConfig argument is not an ObjectLiteralExpression');
  }

  // Add a new property to the ObjectLiteralExpression
  const fetchProperty = ts.factory.createPropertyAssignment(
    'fetch',
    ts.factory.createIdentifier('clientSdkfetch'),
  );

  const updatedProperties = ts.factory.createNodeArray([...configObject.properties, fetchProperty]);

  const updatedConfigObject = ts.factory.updateObjectLiteralExpression(
    configObject,
    updatedProperties,
  );

  const updatedCreateConfigCall = ts.factory.updateCallExpression(
    createConfigCall,
    createConfigCall.expression,
    createConfigCall.typeArguments,
    [updatedConfigObject],
  );

  const updatedInitializer = ts.factory.updateCallExpression(
    initializer,
    initializer.expression,
    initializer.typeArguments,
    [updatedCreateConfigCall],
  );

  const updatedVariableDeclaration = ts.factory.updateVariableDeclaration(
    variableDeclaration,
    variableDeclaration.name,
    variableDeclaration.exclamationToken,
    variableDeclaration.type,
    updatedInitializer,
  );

  const updatedDeclarationList = ts.factory.updateVariableDeclarationList(declarationList, [
    updatedVariableDeclaration,
  ]);

  const updatedClientNode = ts.factory.updateVariableStatement(
    clientNode,
    clientNode.modifiers,
    updatedDeclarationList,
  );

  // Replace the original clientNode with the updated one
  file['_items'][1] = updatedClientNode;
};
