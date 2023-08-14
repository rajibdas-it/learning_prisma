import app from "./app";

const port = process.env.PORT || 3003;

async function main() {
  try {
    app.listen(port, () => {
      console.log(`😍 server running on port ${port}`);
    });
  } catch (error) {
    console.log("😿something went wrong", error);
  }
}

main();
