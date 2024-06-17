import app from "@/app";
import Logger from "@/logger";

const port = process.env.PORT || 3000;

Logger.error("This is an error log");
Logger.warn("This is a warn log");
Logger.info("This is a info log");
Logger.http("This is a http log");
Logger.debug("This is a debug log");

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
