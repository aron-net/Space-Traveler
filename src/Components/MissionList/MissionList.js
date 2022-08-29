import Card from "../UI/Card";

const MissionList = () => (
             
            <Card className="missionItem" >
                <div className="missionCol">
                    Mission
                    <h2 className="missionTittle">
                    Thaicom
                    </h2>
                </div>
                <div className="descpCol">
                    Description
                    <p className="missionDescrpt">
                    ejrfiqjfeifiqjrf jiefviqef ihqegerhgui iigiruiheiuh
                    </p>
                </div>
                <div className="status">
                    Status
                    <h3 className="missionBadge">
                    Active Member
                   </h3>
                </div>
                
                <div className="join">
                    <button className="joinMission">
                    Join a Mission
                </button>
                </div>
                               

            </Card>
);
 
export default MissionList;