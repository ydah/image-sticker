type GetActiveTab = () => Promise<chrome.tabs.Tab>

export const getActiveTab: GetActiveTab = async () => {
  const tabList = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })
  if (!tabList.length) throw new Error('NoActiveTab')
  // Currently, active tab should never be more than one
  return tabList[0]
}
