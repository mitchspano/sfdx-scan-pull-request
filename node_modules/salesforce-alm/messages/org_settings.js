
module.exports = {
  deprecatedPrefFormatLegacy: `We\'re deprecating orgPreferences in Summer ’19. You can continue to use them until they are 
replaced by settings in Winter ’20. But why wait? Here\'s exactly how to update the scratch org 
definition file.
Replace the orgPreferences section:
%s
With Settings:
%s
For more information on configuring settings in a scratch org definition file, 
see: https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm  
`,  
  deprecatedPrefFormat: `We've deprecated OrgPreferences. Update the scratch org definition file to replace OrgPreferences with their corresponding settings.

Replace the orgPreferences section:
%s
With their updated settings:
%s
For more info on configuring settings in a scratch org definition file see: https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm.'
`,
  migratedPrefFormat: `We're deprecating OrgPreferenceSettings. We've added the settings to other metadata types in Winter '20. You can continue to use OrgPreferenceSettings until they are replaced by their corresponding settings in Spring '20. But why wait? Here's exactly what you need to update in the scratch org definition file.

Replace the orgPreferenceSettings section:
%s
With their updated settings:
%s
For more info on configuring settings in a scratch org definition file see: 
https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm  
`
};
