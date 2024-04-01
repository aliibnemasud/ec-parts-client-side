import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Tool from "./Tool";

const Tools = () => {
	const navigate = useNavigate();
	const { isLoading, data, isError, error } = useQuery(["tools"], () =>
		axios.get("https://ec-cycle-parts.onrender.com/tools"),
	);
	const tools = data?.data;
	return (
		<div className="max-w-7xl mx-auto mb-16">
			<h1 className="text-4xl text-center my-16 font-bold uppercase">
				Cycle <span className="text-primary">Tools</span>
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
				{tools?.map((tool) => (
					<Tool key={tool._id} tool={tool} />
				))}
			</div>

			<div className="text-center">
				{isError && <span className="text-red-600">{error?.message}</span>}
				{isLoading && (
					<button className="btn btn-square loading disabled mx-auto"></button>
				)}
			</div>

			<div className="text-center mt-10">
				<button
					onClick={() => navigate("/shop")}
					className="btn btn-primary mt-5 text-center text-white"
				>
					Load More
				</button>
			</div>
		</div>
	);
};

export default Tools;
