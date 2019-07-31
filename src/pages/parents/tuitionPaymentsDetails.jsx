import React from "react"
import { Link } from "react-router-dom"
import PaymentDetailsModal from "../../components/modals/PaymentDetailsModal"
import AmountArrow from "../../assets/images/amountarrow.svg"

const TuitionPaymentsDetails = () => {
  return (
    <div class="container-fluid tuition_payments">
      <div class="row">
        <div class="col-md-12">
          <h1>
            <Link to="/parents/tuition-payments">
              <img src={AmountArrow} alt="" />
              Amount Details
            </Link>
          </h1>
        </div>
      </div>

      <PaymentDetailsModal />
    </div>
  );
};

export default TuitionPaymentsDetails;
