import { useAppDispatch, useAppSelector } from "../redux/hooks";


export default function Home() {

	const name = useAppSelector((state) => state.demito.name);
	console.log("🚀 ~ file: index.tsx:7 ~ Home ~ name:", name)
	const dispatch = useAppDispatch();

	

	return (
		<nav className="bg-black flex justify-center">

			<h1>Hola ola</h1>
		</nav>
	);
}
