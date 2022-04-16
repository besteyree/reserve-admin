import React from 'react'
import {Helmet} from "react-helmet";
const Scripts = () => {
  return (
    <Helmet>
          {/* <!-- Vendor JS Files --> */}
  <script src="/assets/vendor/apexcharts/apexcharts.min.js"></script>



  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/assets/vendor/chart.js/chart.min.js"></script>
   {/* <script src="/assets/vendor/echarts/echarts.min.js"></script> */}
  <script src="/assets/vendor/quill/quill.min.js"></script>
  <script src="/assets/vendor/simple-datatables/simple-datatables.js"></script>
  <script src="/assets/vendor/tinymce/tinymce.min.js"></script>
  <script src="/assets/vendor/php-email-form/validate.js"></script>

  {/* <!-- Template Main JS File --> */}
  <script src="/assets/js/main.js"></script>



  {/* <!-- Graph Scripts -->
  <!-- <script src="assets/js/graph.js"></script> --> */}
    </Helmet>
  )
}

export default Scripts