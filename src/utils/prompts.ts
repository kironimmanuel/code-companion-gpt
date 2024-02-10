export const generateScript = ({ feature, programmingLanguage }: { feature: string; programmingLanguage: string }) => {
    const query = `Generate a code snippet that implements a ${feature} feature in ${programmingLanguage}.
Provide a script demonstrating its usage if the feature can be implemented.
Ensure the script is concise, well-commented, and shows the practical application of the ${feature}.
In case the ${feature} cannot be implemented, return a script with proper error handling or an explanation message.
Format the response as follows:
{
  "script": {
    "programmingLanguage": "${programmingLanguage}",
    "feature": "${feature}",
    "description": "A brief description of the ${feature} feature.",
    "codeSnippet": "The actual code snippet implementing the ${feature} feature."
  }
}
If implementation is not possible, respond with { "script": null } only.`;
    return query;
};
