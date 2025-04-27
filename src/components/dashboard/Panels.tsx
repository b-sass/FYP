import { SessionBegin, SessionPlan } from "./Panels/Session";
import Calendar from "../calendar/Calendar";
import Todo from "./Panels/Todo";
import Record from "./Panels/Record";
import styles from "../../styles/dashboard/panel.module.css"

let LeftPanel = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.panelItem}>
				<SessionPlan />
			</div>
			<div className={styles.panelItem}>
				<SessionBegin />
			</div> 
		</div>
	);
}

let RightPanel = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.panelItem}>
				<Todo/>
			</div>
			<div className={styles.panelItem}>
				<Record />
			</div>
		</div>
	);
};

export { LeftPanel, RightPanel };
