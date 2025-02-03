import React, { Component } from 'react';
import AboutUs from './AboutUs';
import Form from './Form';
import Card from './Card';

export default class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: JSON.parse(localStorage.getItem('cards')) || [],
            editingCardIndex: null,
        };
        this.addCard = this.addCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.showForm && !this.props.showForm) {
            this.setState({ editingCardIndex: null });
        }
    }

    addCard(cardData) {
        const updatedCards = [...this.state.cards, cardData];
        this.setState({ cards: updatedCards });
        localStorage.setItem('cards', JSON.stringify(updatedCards));
    }

    editCard(cardData, index) {
        const updatedCards = [...this.state.cards];
        updatedCards[index] = cardData;
        this.setState({ cards: updatedCards });
        localStorage.setItem('cards', JSON.stringify(updatedCards));
    }

    deleteCard(index) {
        const updatedCards = this.state.cards.filter(function (_card, i) {
            return i !== index;
        });
        this.setState({ cards: updatedCards });
        localStorage.setItem('cards', JSON.stringify(updatedCards));
    }

    handleEdit(index) {
        this.setState({ editingCardIndex: index });
        this.props.onHandleShowForm(true);
    }

    render() {
        return (
            <>
                <div className="row p-2 m-2" id="body-container">
                    <div className="col-3 p-5 pt-4 pb-3 mb-3 lh-lg" id="aboutUs">
                        <AboutUs />
                    </div>
                    <div className="col-9">
                        <div className="row" id="addNew">
                            <button
                                type="button"
                                className="btn btn-success col-2"
                                id="post-a-card"
                                onClick={function () {
                                    this.props.onHandleShowForm(true);
                                }.bind(this)}
                            >
                                Post a Card
                            </button>
                        </div>
                        <div className="row" id="cards-container">
                            {this.state.cards.map(function (card, index) {
                                return (
                                    <Card
                                        key={index}
                                        card={card}
                                        onEdit={function () {
                                            this.handleEdit(index);
                                        }.bind(this)}
                                        onDelete={function () {
                                            this.deleteCard(index);
                                        }.bind(this)}
                                    />
                                );
                            }.bind(this))}
                        </div>
                    </div>
                </div>
                <div>
                    {this.props.showForm && (
                        <Form
                            onAddCard={this.addCard}
                            onEditCard={this.editCard}
                            card={this.state.cards[this.state.editingCardIndex]}
                            cardIndex={this.state.editingCardIndex}
                            onHandleShowForm={this.props.onHandleShowForm}
                        />
                    )}
                </div>
            </>
        );
    }
}