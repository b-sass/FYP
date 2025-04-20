import Navbar from "../ui/Navbar";
import * as panels from "./Panels";

import styles from "./styles/dashboard.module.css"

let Dashboard = () => {
    return(
        <>
			<Navbar />
            <div className={styles.dashboard}>
                <panels.LeftPanel />
                {/* <panels.MiddlePanel /> */}
                <panels.RightPanel />
            </div>
        </>
    );
}

export default Dashboard;