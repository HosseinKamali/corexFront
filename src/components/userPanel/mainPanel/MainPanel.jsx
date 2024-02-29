import "./mainPanel.css";
import exchange from "../../dataMoney";
import { useState } from "react";
import { dataWallet } from "../../dataWalet";

const MainPanel = () => {
  const [dataExchange, setDataExchange] = useState(exchange);
  const [dataWallets, setDataWallets] = useState(dataWallet);

  return (
    <section className="mainPanel">
      <div className="mainHeader">
        {dataExchange.map((item, index) => {
          const { title, urlImage, Quote, Changing } = item;
          return (
            <div className="card" key={index}>
              <header>
                <div className="flagOne">
                  <img src={urlImage} />
                </div>

                <p>{title}</p>
              </header>
              <footer>
                <div>
                  <p style={{ marginBottom: "5px" }}>Quote</p>
                  <p>{Quote}</p>
                </div>
                <div>
                  <p style={{ marginBottom: "5px" }}>Changing </p>
                  <p style={{ marginLeft: "10px" }}>{Changing}</p>
                </div>
              </footer>
            </div>
          );
        })}
      </div>

      <div className="mainFooter">
       { 
       dataWallets.map((item,index)=>{
          const {title,icon,price,Deposit,Withdraw}=item
        return(
          <div className={title === "Wallet Balance (USD)" ? "card bgGreen" : "card"} key={index}>


          <div className="header">
          <span>{icon}</span>
            <p>{title}</p>
            
          </div>
          <div className="price">{price}</div>
          <div className="depoWith">
            <button>{Deposit}</button>
            <button>{item.Withdraw ? item.Withdraw : item.Transfer}</button>
          </div>
        </div>

        )
       })
      
       }
      </div>
    </section>
  );
};

export default MainPanel;
