import React from 'react';
import questions from '../constants/questions';
import Options from '../components/Options';
import Suggestion from '../components/Suggestion';
import Pagination from '../components/Pagination';

export default class Question extends React.Component {
  renderOptions() {
    const { current, handleSelect, quiz } = this.props;
    const { options } = questions[current];
    return options
      ? <Options
          list={options}
          handleSelect={idx => handleSelect(current, idx)}
          selected={quiz[current]}
        />
      : <Suggestion
          idx={current}
          answer={quiz[current]}
          handleChange={handleSelect}
        />;
  }

  renderConfirmButton() {
    const { quiz, current, handleConfirm: onClick } = this.props;
    const isLastQuestion = current === questions.length - 1;
    const label = isLastQuestion ? 'Finalizar' : 'Confirmar';
    const props = {
      onClick,
      disabled: !isLastQuestion && quiz[current] === undefined,
      className: 'waves-effect waves-light btn lime darken-1',
    };

    return <button {...props}>{label}</button>;
  }

  render() {
    const { quiz, current, handlePagination } = this.props;
    const { title } = questions[current];

    return (
      <div className="Question">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{current + 1}) {title}</span>
            {this.renderOptions()}
          </div>
          <div className="card-action">
            {this.renderConfirmButton()}
          </div>
        </div>
        <Pagination
          currentPage={current}
          maxPage={Object.keys(quiz).filter(i => quiz[i] !== undefined).length}
          handleClick={handlePagination}
        />
      </div>
    );
  }
}

