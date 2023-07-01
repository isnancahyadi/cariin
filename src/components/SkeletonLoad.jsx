export default function SkeletonLoad({ type }) {
  const _COUNTER = 5;
  const Listjob = () => (
    <div className="ListJobSK">
      <div className="row justify-content-center align-items-center">
        <div className="col-auto">
          <div className="photo" />
        </div>
        <div className="col-md-10">
          <div className="card-title" />
          <div className="card-subtitle mb-1 mt-1" />
          <div className="location" />
          <div className="skill mt-2" />
        </div>
      </div>
      <hr className="mt-5 mb-5" />
    </div>
  );

  if (type === "listjob") return Array(_COUNTER).fill(<Listjob />);
}
