import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

function Subscription() 
{
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="mt30 mb30">
                            <Card title="Página de inscrição" />
                        </div>
                        <Link to="/promotion">
                            <div className="dflex">
                                <Button text="Ver promoção" />
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Subscription;