import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export const Screener = () => {
  const [stockdetail, setStockdetail] = useState();
  // const [direction, setDirection] = useState("");
  // useEffect(() => {
  //   const ws = new WebSocket("wss://streamer.finance.yahoo.com");
  //   const root = protobuf.load("./YPricingData.proto", (error, root) => {
  //     if (error) {
  //       return console.log(error);
  //     }
  //     const Yaticker = root.lookupType("yaticker");
  //     ws.onopen = function open() {
  //       console.log("connected");
  //       ws.send(
  //         JSON.stringify({
  //           subscribe: ["SBIN.NS"],
  //         })
  //       );
  //     };
  //     ws.onclose = function close() {
  //       console.log("disconnected");
  //     };
  //     ws.onmessage = function incoming(message) {
  //       const next = Yaticker.decode(new Buffer(message.data, "base64"));
  //       if (stockdetail) {
  //         const nextdirection =
  //           stockdetail.price < next ? "up" : stockdetail.price ? "down" : "";
  //         if (nextdirection) {
  //           setDirection(nextdirection);
  //         }
  //       }
  //       setStockdetail(next);
  //     };
  //   });
  // }, []);
  const [symbolData, setSymbolData] = useState([]);
  const symbols = [
    "ABB.NS",
    "ACC.NS",
    "APLAPOLLO.NS",
    "AUBANK.NS",
    "ADANIENSOL.NS",
    "ADANIENT.NS",
    "ADANIGREEN.NS",
    "ADANIPORTS.NS",
    "ADANIPOWER.NS",
    "ATGL.NS",
    "AWL.NS",
    "ABCAPITAL.NS",
    "ABFRL.NS",
    "ALKEM.NS",
    "AMBUJACEM.NS",
    "APOLLOHOSP.NS",
    "APOLLOTYRE.NS",
    "ASHOKLEY.NS",
    "ASIANPAINT.NS",
    "ASTRAL.NS",
    "AUROPHARMA.NS",
    "DMART.NS",
    "AXISBANK.NS",
    "BAJAJ-AUTO.NS",
    "BAJFINANCE.NS",
    "BAJAJFINSV.NS",
    "BAJAJHLDNG.NS",
    "BALKRISIND.NS",
    "BANDHANBNK.NS",
    "BANKBARODA.NS",
    "BANKINDIA.NS",
    "BATAINDIA.NS",
    "BERGEPAINT.NS",
    "BDL.NS",
    "BEL.NS",
    "BHARATFORG.NS",
    "BHEL.NS",
    "BPCL.NS",
    "BHARTIARTL.NS",
    "BIOCON.NS",
    "BOSCHLTD.NS",
    "BRITANNIA.NS",
    "CGPOWER.NS",
    "CANBK.NS",
    "CHOLAFIN.NS",
    "CIPLA.NS",
    "COALINDIA.NS",
    "COFORGE.NS",
    "COLPAL.NS",
    "CONCOR.NS",
    "COROMANDEL.NS",
    "CROMPTON.NS",
    "CUMMINSIND.NS",
    "DLF.NS",
    "DABUR.NS",
    "DALBHARAT.NS",
    "DEEPAKNTR.NS",
    "DELHIVERY.NS",
    "DEVYANI.NS",
    "DIVISLAB.NS",
    "DIXON.NS",
    "LALPATHLAB.NS",
    "DRREDDY.NS",
    "EICHERMOT.NS",
    "ESCORTS.NS",
    "NYKAA.NS",
    "FEDERALBNK.NS",
    "FACT.NS",
    "FORTIS.NS",
    "GAIL.NS",
    "GLAND.NS",
    "GODREJCP.NS",
    "GODREJPROP.NS",
    "GRASIM.NS",
    "FLUOROCHEM.NS",
    "GUJGASLTD.NS",
    "HCLTECH.NS",
    "HDFCAMC.NS",
    "HDFCBANK.NS",
    "HDFCLIFE.NS",
    "HAVELLS.NS",
    "HEROMOTOCO.NS",
    "HINDALCO.NS",
    "HAL.NS",
    "HINDPETRO.NS",
    "HINDUNILVR.NS",
    "ICICIBANK.NS",
    "ICICIGI.NS",
    "ICICIPRULI.NS",
    "IDFCFIRSTB.NS",
    "ITC.NS",
    "INDIANB.NS",
    "INDHOTEL.NS",
    "IOC.NS",
    "IRCTC.NS",
    "IRFC.NS",
    "IGL.NS",
    "INDUSTOWER.NS",
    "INDUSINDBK.NS",
    "NAUKRI.NS",
    "INFY.NS",
    "INDIGO.NS",
    "IPCALAB.NS",
    "JSWENERGY.NS",
    "JSWSTEEL.NS",
    "JINDALSTEL.NS",
    "JUBLFOOD.NS",
    "KPITTECH.NS",
    "KOTAKBANK.NS",
    "L&TFH.NS",
    "LTTS.NS",
    "LICHSGFIN.NS",
    "LTIM.NS",
    "LT.NS",
    "LAURUSLABS.NS",
    "LICI.NS",
    "LUPIN.NS",
    "MRF.NS",
    "LODHA.NS",
    "M&MFIN.NS",
    "M&M.NS",
    "MANKIND.NS",
    "MARICO.NS",
    "MARUTI.NS",
    "MFSL.NS",
    "MAXHEALTH.NS",
    "MAZDOCK.NS",
    "MSUMI.NS",
    "MPHASIS.NS",
    "MUTHOOTFIN.NS",
    "NHPC.NS",
    "NMDC.NS",
    "NTPC.NS",
    "NAVINFLUOR.NS",
    "NESTLEIND.NS",
    "OBEROIRLTY.NS",
    "ONGC.NS",
    "OIL.NS",
    "PAYTM.NS",
    "POLICYBZR.NS",
    "PIIND.NS",
    "PAGEIND.NS",
    "PATANJALI.NS",
    "PERSISTENT.NS",
    "PETRONET.NS",
    "PIDILITIND.NS",
    "PEL.NS",
    "POLYCAB.NS",
    "POONAWALLA.NS",
    "PFC.NS",
    "POWERGRID.NS",
    "PRESTIGE.NS",
    "PGHH.NS",
    "PNB.NS",
    "RECLTD.NS",
    "RVNL.NS",
    "RELIANCE.NS",
    "SBICARD.NS",
    "SBILIFE.NS",
    "SRF.NS",
    "MOTHERSON.NS",
    "SHREECEM.NS",
    "SHRIRAMFIN.NS",
    "SIEMENS.NS",
    "SONACOMS.NS",
    "SBIN.NS",
    "SAIL.NS",
    "SUNPHARMA.NS",
    "SUNTV.NS",
    "SYNGENE.NS",
    "TVSMOTOR.NS",
    "TATACHEM.NS",
    "TATACOMM.NS",
    "TCS.NS",
    "TATACONSUM.NS",
    "TATAELXSI.NS",
    "TATAMTRDVR.NS",
    "TATAMOTORS.NS",
    "TATAPOWER.NS",
    "TATASTEEL.NS",
    "TECHM.NS",
    "RAMCOCEM.NS",
    "TITAN.NS",
    "TORNTPHARM.NS",
    "TORNTPOWER.NS",
    "TRENT.NS",
    "TIINDIA.NS",
    "UPL.NS",
    "ULTRACEMCO.NS",
    "UNIONBANK.NS",
    "UBL.NS",
    "MCDOWELL-N.NS",
    "VBL.NS",
    "VEDL.NS",
    "IDEA.NS",
    "VOLTAS.NS",
    "WIPRO.NS",
    "YESBANK.NS",
    "ZEEL.NS",
    "ZOMATO.NS",
    "ZYDUSLIFE.NS",
  ];
  const fetchData = async (start = 0) => {
    const symbolsBatch = symbols.slice(start, start + 50); // Get the next batch of 50 symbols
    const symbolsString = symbolsBatch.join(",");

    const options = {
      method: "GET",
      url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes",
      params: {
        region: "IN",
        symbols: symbolsString,
      },
      headers: {
        // "X-RapidAPI-Key": "06d5de08d8mshf58e5df4b6def17p13abd6jsn67a935c12c53",
        // "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        // "X-RapidAPI-Key": "c24fa4a171msh88ffcb898da7d4cp164eb2jsnb6a1c9a7690a",
        // "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "a69012563fmshe33d5919fcb5a2dp150094jsnab7a61bdb39c",
        "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setSymbolData((prevData) => [
        ...prevData,
        ...response.data.quoteResponse.result,
      ]);

      // If there are more symbols, fetch the next batch
      if (start + 50 < symbols.length) {
        fetchData(start + 50);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const onOpen = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const onClose = () => {
    setModalContent("");
    setIsOpen(false);
  };
  const reloadPage = () => {
    window.location.reload();
  };
  const reloadthepage = () => {
    reloadPage();
  };

  return (
    <>
      <Button onClick={() => onOpen("Info")}>Info</Button>
      <Button
        onClick={() =>
          onOpen(
            " Disclaimer: This content is intended for educational purposes only. It has been created based on our knowledge, which may not be accurate or up-to-date. We advise you to rely on your own judgment and knowledge when making any investment or securities-related decisions. Please be aware that investments and securities are subject to market risks, and any outcomes or losses are solely your responsibility. We strongly recommend consulting with a professional financial advisor before making any investment decisions."
          )
        }
      >
        Disclaimer
      </Button>
      <Button onClick={reloadthepage}>Refresh</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>{modalContent}</ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="flex flex-col mt-9 border border-gray-100 rounded relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead
            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
          "
          >
            <tr className=" ">
              <th scope="col " className="px-6 py-3">
                SYMBOL
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Open
              </th>
              <th scope="col" className="px-6 py-3">
                High
              </th>
              <th scope="col" className="px-6 py-3">
                Low
              </th>
              <th scope="col" className="px-6 py-3">
                Prev Close
              </th>
              <th scope="col" className="px-6 py-3">
                Volume
              </th>
              <th scope="col" className="px-6 py-3">
                OL
              </th>
              <th scope="col" className="px-6 py-3">
                OH
              </th>
              <th scope="col" className="px-6 py-3">
                Change
              </th>
              <th scope="col" className="px-6 py-3">
                % Change
              </th>
              <th scope="col" className="px-6 py-3">
                Buy/Sell
              </th>
            </tr>
          </thead>
          <tbody className="   ">
            {symbolData.map((symbolDataItem) => (
              <tr
                key={symbolDataItem.symbol}
                className="bg-white border-b dark:bg-gray-800  dark:border-gray-700"
              >
                <td className="px-6 py-4">{symbolDataItem.shortName}</td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketPrice}
                </td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketOpen}
                </td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketDayHigh}
                </td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketDayLow}
                </td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketPreviousClose}
                </td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketVolume}
                </td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketOpen ===
                  symbolDataItem.regularMarketDayLow
                    ? "true"
                    : "false"}
                </td>
                <td className=" px-6 py-4">
                  {symbolDataItem.regularMarketOpen ===
                  symbolDataItem.regularMarketDayHigh
                    ? "true"
                    : "false"}
                </td>
                <td
                  className="px-6 py-4"
                  style={{
                    color:
                      symbolDataItem.regularMarketChange > 0
                        ? "green"
                        : symbolDataItem.regularMarketChange < 0
                        ? "red"
                        : "black",
                  }}
                >
                  {symbolDataItem.regularMarketChange.toFixed(2)}
                </td>
                <td
                  className="px-6 py-4"
                  style={{
                    color:
                      symbolDataItem.regularMarketChange > 0
                        ? "green"
                        : symbolDataItem.regularMarketChange < 0
                        ? "red"
                        : "black",
                  }}
                >
                  {symbolDataItem.regularMarketChangePercent.toFixed(2)}%
                </td>

                {/* <td>
                      {symbolDataItem.regularMarketOpen ===
                      symbolDataItem.regularMarketDayHigh ? (
                        <span class="bg-red-200 text-red-900 text-md font-semibold me-2 px-7 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          sell
                        </span>
                      ) : symbolDataItem.regularMarketOpen ===
                        symbolDataItem.regularMarketDayOpen ? (
                        <span class="bg-green-300 text-green-900 text-md font-medium me-2 px-7 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          buy
                        </span>
                      ) : (
                        <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-4 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          Wait for Trade
                        </span>
                      )}
                    </td> */}
                <td>
                  {Math.abs(
                    symbolDataItem.regularMarketOpen -
                      symbolDataItem.regularMarketDayLow
                  ) < 0.0001 ? (
                    <span class="bg-green-300 text-green-900 text-md font-medium me-2 px-7 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Buy
                    </span>
                  ) : Math.abs(
                      symbolDataItem.regularMarketOpen -
                        symbolDataItem.regularMarketDayHigh
                    ) < 0.0001 ? (
                    <span class="bg-red-200 text-red-900 text-md font-semibold me-2 px-7 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Sell
                    </span>
                  ) : (
                    <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-4 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Wait for Trade
                    </span>
                  )}
                </td>
                {/* Add additional cells based on your data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4 capitalize h-[2rem]">
        {/* <Pagination /> */}
        {/* <div className="stonk">
              <marquee direction="left">
                {stockdetail && (
                  <h2 className=" digi_text text-4xl">
                    {stockdetail.id} {stockdetail.price.toFixed(2)} INR
                  </h2>
                )}
              </marquee>
            </div> */}
      </div>
    </>
  );
};
