import { posts } from "./Posts";

const PostList = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8" id="news">
				Tin nổi bật
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{posts.map((post) => (
					<div key={post.id} className="collapse bg-base-100 shadow-lg p-6">
						<input type="checkbox" />
						<div className="collapse-title text-2xl font-bold">
							{post.title}
						</div>
						<div className="collapse-content">
							<p className="text-gray-700 mb-4 italic">{post.excerpt}</p>
							<div className="text-gray-600 text-sm">
								<span className="text-primary font-bold ">
									By {post.author}
								</span>{" "}
								| <span>{post.date}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostList;
