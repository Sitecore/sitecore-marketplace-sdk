[**@sitecore-marketplace-sdk/xmc**](../README.md)

***

[@sitecore-marketplace-sdk/xmc](../README.md) / WorkflowStatistics

# Type Alias: WorkflowStatistics

> **WorkflowStatistics** = `object`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1453](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1453)

Represents the workflow statistics.

## Properties

### name?

> `optional` **name**: `string` \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1458](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1458)

The name of the workflow.
Example value: Sample Workflow

***

### states?

> `optional` **states**: [`WorkflowStateStatistics`](WorkflowStateStatistics.md)[] \| `null`

Defined in: [packages/xmc/src/client-xmapp/types.gen.ts:1462](https://github.com/Sitecore/sitecore-marketplace-sdk/blob/e87783cce9f115393973a45e109d17b99bf1df7e/packages/xmc/src/client-xmapp/types.gen.ts#L1462)

A collection of states defined for the workflow, and the number of pages in each state.
