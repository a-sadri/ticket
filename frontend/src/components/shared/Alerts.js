import ErrorAlert from './ErrorAlert';

const Alerts = ({ alert, title }) => {
  if (alert === 'error') {
    return <ErrorAlert title={title} />;
  }
};

export default Alerts;
