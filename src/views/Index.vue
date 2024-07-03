<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3" aria-label="Fifth navbar example">
    <div class="container-fluid pt-2">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div class="container">
      <div class="row">
        <div class="card col-12 mb-5">
        <table class="table caption-top my-3">
          <caption class="fs-4 fw-bolder">經銷商業績統計</caption>
          <thead class="table-warning">
            <tr>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
          <tfoot>
            <td colspan="3"></td>
            <td>總業績 : <span class="text-danger fw-bold fs-5">$200</span></td>
          </tfoot>
        </table>
        </div>
        <div class="card col-6">
          <table class="table table-striped caption-top">
          <caption class="fs-4 fw-bolder">刊物銷量</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
</template>
