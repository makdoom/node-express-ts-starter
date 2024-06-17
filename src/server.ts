import app from "@/app";
import Logger from "@/logger";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server up and running at http://localhost:${port}`);
});
