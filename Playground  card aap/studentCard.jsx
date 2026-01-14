import React from "react";

const StudentCard = ({ name, rollNo, batch, favoriteLanguage }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md p-6 border border-gray-200">

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {name}
      </h2>

      <div className="space-y-3">
        <div>
          <span className="text-sm font-medium text-gray-500">Roll No:</span>
          <p className="text-base text-gray-900">{rollNo}</p>
        </div>

        <div>
          <span className="text-sm font-medium text-gray-500">Batch:</span>
          <p className="text-base text-gray-900">{batch}</p>
        </div>

        <div>
          <span className="text-sm font-medium text-gray-500">Favorite Language:</span>
          <p className="text-base text-gray-900">{favoriteLanguage}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard