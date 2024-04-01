import React, { useState } from "react";
import OurBlog from "./OurBlog";
import PrimaryBtn from "../Shared/Buttons/PrimaryBtn";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const OurBlogs = () => {
	const { isLoading, data, isError, error } = useQuery(["blogs"], () =>
		axios.get("https://ec-cycle-parts.onrender.com/blogs"),
	);	
	const blogs = data?.data;
	return (
		<div className="max-w-7xl mx-auto my-32">
			<h1 className="text-4xl text-center my-16 font-bold uppercase">
				Our <span className="text-primary">Blogs</span>
			</h1>

			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{blogs?.map((blog) => (
					<OurBlog key={blog._id} blog={blog}>
						{" "}
					</OurBlog>
				))}
			</div>
			<div className="text-center">
				{isError && <span className="text-red-600">{error?.message}</span>}
				{isLoading && (
					<button className="btn btn-square loading disabled mx-auto"></button>
				)}
			</div>
			<div className="my-10 text-center">
				<PrimaryBtn>See More</PrimaryBtn>
			</div>
		</div>
	);
};

export default OurBlogs;
