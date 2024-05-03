export const handler = async (event: JSON) => {
  console.log("event", event);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello, World!",
        input: event,
      },
      null,
      2
    ),
  };
};
