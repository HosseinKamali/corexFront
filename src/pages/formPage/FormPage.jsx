

import SideBarForm from "../../components/sideBar/SideBarForm";
import LinkPages from "../linksLoginSignUp/LinkLoginSignUp";
import "./formPage.css";


const FormPage = () => {

  return (
    <div className="wrapperFormPage">
     <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/e384/9adc/e4d098ea5f90bba3f43fa025143dd356?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qRgG5P3wX~C818ttHmut-Hu06ucWxVAnLddjPSUchkhdu6gAUijADew7eDES5~TeNMWztoFNTsuJLrc3~AFYNTxDZ~ulj3QZMSyzOOY~-sDhzvMDKKSfFJNbfd-u9ud1h41apkECLOP0yqhGPICNFotJQ5ENVb2JHCrbkTT0p~gE~xQpAXhP5Py3Hb-7T6n8dROFFUjMIDAdf7PKz~3RBBjoCSYdFakT5N296riKmcsIx4wVgjzIzgwqBe2QdkVK~0CqW-GOkrKmelxn6LdeJ4jktff6BaI4eIgxOaW-eSMyU964-q-y7sXOg76pxyscNwkr-hGQyWYbLgihm7Tz1A__" alt="" />
      </div>
      <div className="container">
        <SideBarForm/>
        <LinkPages/>
      </div>
    </div>
  );
};

export default FormPage;
