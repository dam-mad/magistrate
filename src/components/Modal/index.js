import React, { Component, Fragment } from "react"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import "./style.css"

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }
  render() {
    const { showModal } = this.state
    const { children } = this.props
    return (
      <Fragment>
        <button
          type="button"
          className="c-button__contact"
          onClick={() => this.setState({ showModal: true })}
        >
          Contact
        </button>
        {showModal && (
          <Dialog>
            <div className="c-button__container">
              <button
                className="c-button__close"
                type="button"
                onClick={() => this.setState({ showModal: false })}
              >
                x
              </button>
            </div>
            <div className="c-modal">{children}</div>{" "}
          </Dialog>
        )}
      </Fragment>
    )
  }
}
