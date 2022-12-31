import { Request, Response, NextFunction } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const message = {
		response: "Server cannot find the requested resource",
	};

	res.status(404).send(message);
};

export default notFound;
