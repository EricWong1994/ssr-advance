// posts will be populated at build time by getStaticProps()
// function Blog({ posts }) {
// 	return (
// 		<ul>
// 			{posts.map(post => (
// 				<li>{post.title}</li>
// 			))}
// 		</ul>
// 	);
// }

function Blog({ stars }) {
	return <div>Next stars: {stars}</div>;
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export async function getStaticProps() {
export async function getServerSideProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const res = await fetch('https://api.github.com/repos/vercel/next.js');
	// console.log('res: ', res);
	const json = await res.json();
	// console.log('json: ', json);

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			stars: json.stargazers_count,
		},
	};
}

export default Blog;
