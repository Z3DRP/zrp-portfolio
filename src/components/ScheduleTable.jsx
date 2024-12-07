import "../globals.css";
import PropTypes from "prop-types";

export default function ScheduleTable({ availability, schedule }) {
  return (
    <>
      <article className="table w-full">
        <section className="table=header-group">
          <div className="table-row">{props.availability.map()}</div>
        </section>
      </article>
    </>
  );
}

ScheduleTable.propTypes = {
  Period: PropTypes.shape({
    Id: PropTypes.string.isRequired,
  }),
};

