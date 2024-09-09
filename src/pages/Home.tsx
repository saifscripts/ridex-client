import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment, { Moment } from 'moment';
import { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState<Moment | null>(moment(new Date()));
  console.log(moment(value).format());
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6">
        <DateTimePicker
          value={value}
          onChange={setValue}
          label="Basic date time picker"
        />
      </div>
    </div>
  );
};

export default Home;
