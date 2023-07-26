import { useState } from 'react';
import './styles.css';

export default function App() {
	return (
		<div>
			<TipCalcuator />
		</div>
	);
	function TipCalcuator() {
		const [bill, setBill] = useState(0);
		const [tip1, setTip1] = useState(0);
		const [tip2, setTip2] = useState(0);
		const tip = (tip1 + tip2) / 2;
		return (
			<div>
				<div>
					<label>Your bill </label>
					<input
						type="text"
						placeholder="Your bill "
						value={bill}
						onChange={(e) => setBill(Number(e.target.value))}
					/>
				</div>
				<Satisfaction tip={tip1} onSelect={setTip1}>
					How much you are satisfied from here?
				</Satisfaction>
				<Satisfaction tip={tip2} onSelect={setTip2}>
					How much your friend is satisfied from here?
				</Satisfaction>
				<div>
					Your payment is (${bill}+${tip}) is total ${bill + tip}
				</div>
			</div>
		);
	}
	function Satisfaction({ children, tip, onSelect }) {
		return (
			<>
				<div>
					<label>{children}</label>
					<select
						value={tip}
						onChange={(e) => onSelect(Number(e.target.value))}>
						<option value="0">Dissatified(0%) </option>
						<option value="5">So- So(5%) </option>
						<option value="10">Goog(10%) </option>
						<option value="20">Excellent(20%) </option>
					</select>
				</div>
			</>
		);
	}
}
