import React from 'react';

class ListErrors extends React.Component {
  render() {
    const errors = this.props.errors;
    const datacy = this.props.datacy;
    if (errors) {
      return (
        <ul className="error-messages" data-cy="error-messages">
          {
            Object.keys(errors).map(key => {
              return (
                <li key={key} data-cy={datacy}>
                  {key} {errors[key]}
                </li>
              );
            })
          }
        </ul>
      );
    } else {
      return null;
    }
  }
}

export default ListErrors;
