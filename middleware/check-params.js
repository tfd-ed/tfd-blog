export default function ({ query, redirect }) {
  const requiredParams = ["previous", "prefer", "name", "email"];
  const missingParams = requiredParams.filter((param) => !query[param]);
  if (missingParams.length > 0) {
    redirect("/");
  }
}
