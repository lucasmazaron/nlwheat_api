import { serverHttp } from "./app";


const port = process.env.SERVER_PORT || 4000;
serverHttp.listen(port, () => console.log(`Server is running on port ${port}`));
