import React from 'react';
import shortid from 'shortid';

export default function(Item) {
  return class extends React.Component {
    render() {
      return (
        <table>
          <tbody>
          {this.props.data.map((item) => {
            return (
              <Item key={shortid.generate()} item={item} player={this.props.player} />
            );
          })}
          </tbody>
        </table>
      );
    }
  };
};
