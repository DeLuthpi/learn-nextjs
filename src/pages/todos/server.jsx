import axios from "axios";

export async function getServerSideProps() {
	const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
	return {
		props: {
			todos: res?.data,
		},
	};
}

const ServerSide = ({ todos }) => {
	return (
		<div>
			<h1 className="mb-4 text-2xl">Server Side data fetching</h1>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>- {todo.title}</li>
				))}
			</ul>
		</div>
	);
};

export default ServerSide;
