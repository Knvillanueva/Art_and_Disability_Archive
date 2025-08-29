import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

interface Props {}
export const Home = ({}: Props) => {
  return (
    <div className="container-fluid">
      <div>
        <h1>
          Disability and Art Archive
          <br></br>
          <br></br>
          <br></br>
        </h1>
      </div>

      <div className="container-xxl">
        <div className="text-center">
          <div className="col">
            <h2 className="font-weight-bold border border-2 border-secondary">
              An Introduction
            </h2>
            <br></br>
            <p className="fs-3">
              The Disability and Art Archive serves as a database of artists
              with a disability or whose work represents disability in some
              form.Our website features a range of art mediums such as
              paintings, sculptures, and photography. Through this curated
              database archive, we aim to challenge harmful stereotypes and
              negative misconceptions of disability. We invite visitors to
              browse through the archive while learning and engaging with these
              artists and art pieces.
            </p>
          </div>
        </div>
      </div>
      <div className="col container-xxl">
        <br></br>
        <br></br>
        <br></br>

        <h2 className="font-weight-bold border border-2 border-secondary text-center">
          Our Framework: Disability Theory
        </h2>
        <br></br>
        <p className="fs-3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As you explore our archive, you
          will discover many inspiring and thought-provoking artwork that
          captures the complexity and aesthetics of the disability experience.
          The framework of our research is to emphasize that disability is a
          social construct created and maintained by society’s physical, social,
          and attitudinal barriers. We believe that by removing these barriers
          and promoting accessibility, inclusivity, and acceptance, we can
          enable full participation and aesthetic representation of people with
          disabilities within the humanities.
        </p>
      </div>
    </div>
  );
};
