export default function ({ query, redirect }) {
  // Check if multiple query parameters are present
  const requiredParams = ["previous", "prefer", "name", "email"];

  // Check if any required parameter is missing
  const missingParams = requiredParams.filter((param) => !query[param]);

  if (missingParams.length > 0) {
    // Redirect to the home page
    redirect("/");
  }
}
