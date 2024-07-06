import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	return (
		<>
			<Steps />
			<Steps />
		</>
	);
}

function Steps() {
	const [step, setStep] = useState(1);
	// const [test, setTest] = useState({ name: "Tolu" });
	const [isOpen, setIsOpen] = useState(true);

	const previous = () => {
		if (step > 1) {
			setStep(() => step - 1);
		}
	};

	const next = () => {
		if (step < messages.length) {
			setStep(() => step + 1);
			// setTest({ name: "Tolux" });
		}
	};

	const toggle = () => {
		setIsOpen((s) => !s);
	};
	return (
		<>
			<div className="container--main">
				<button onClick={toggle} className="close">
					&times;
				</button>
				{isOpen ? (
					<div className="steps">
						<div className="numbers">
							<div className={step >= 1 ? "active" : ""}>1</div>
							<div className={step >= 2 ? "active" : ""}>2</div>
							<div className={step >= 3 ? "active" : ""}>3</div>
						</div>
						<p className="message">
							Step {step}: {messages[step - 1]}
							{/* {test.name} */}
						</p>
						<div className="buttons">
							<button
								onClick={previous}
								style={{ backgroundColor: "#7950f2", color: "#fff" }}>
								Previous
							</button>
							<button
								onClick={next}
								style={{ backgroundColor: "#7950f2", color: "#fff" }}>
								Next
							</button>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
}
