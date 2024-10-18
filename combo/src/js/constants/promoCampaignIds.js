const promoCampaignData = [
  { id: '1400002', discount: 50 },
  { id: '1600001', discount: 40 },
];

const promoCampaignIds = [];
promoCampaignData.forEach((element) => {
  promoCampaignIds.push(element.id);
});

export { promoCampaignData, promoCampaignIds };
