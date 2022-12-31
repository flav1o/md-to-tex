import { Request, Response, NextFunction } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const message = {
		message: "Server cannot find the requested resource",
		status: 404,
	};

	res.status(404).send(message);
};

export default notFound;
