(ns semantic-ui.core
  (:refer-clojure :exclude [comment list])
  (:require [reagent.core :as r]
            [cuerdas.core :as str]))

(def accordion (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Accordion")))
(def accordion-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "AccordionContent")))
(def accordion-title (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "AccordionTitle")))
(def advertisement (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Advertisement")))
(def breadcrumb (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Breadcrumb")))
(def breadcrumb-divider (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "BreadcrumbDivider")))
(def breadcrumb-section (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "BreadcrumbSection")))
(def button (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Button")))
(def button-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ButtonContent")))
(def button-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ButtonGroup")))
(def button-or (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ButtonOr")))
(def card (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Card")))
(def card-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CardContent")))
(def card-description (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CardDescription")))
(def card-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CardGroup")))
(def card-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CardHeader")))
(def card-meta (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CardMeta")))
(def checkbox (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Checkbox")))
(def comment (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Comment")))
(def comment-action (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentAction")))
(def comment-actions (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentActions")))
(def comment-author (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentAuthor")))
(def comment-avatar (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentAvatar")))
(def comment-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentContent")))
(def comment-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentGroup")))
(def comment-metadata (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentMetadata")))
(def comment-text (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "CommentText")))
(def confirm (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Confirm")))
(def container (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Container")))
(def dimmer (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Dimmer")))
(def dimmer-dimmable (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "DimmerDimmable")))
(def divider (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Divider")))
(def dropdown (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Dropdown")))
(def dropdown-divider (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "DropdownDivider")))
(def dropdown-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "DropdownHeader")))
(def dropdown-item (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "DropdownItem")))
(def dropdown-menu (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "DropdownMenu")))
(def embed (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Embed")))
(def feed (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Feed")))
(def feed-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedContent")))
(def feed-date (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedDate")))
(def feed-event (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedEvent")))
(def feed-extra (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedExtra")))
(def feed-label (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedLabel")))
(def feed-like (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedLike")))
(def feed-meta (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedMeta")))
(def feed-summary (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedSummary")))
(def feed-user (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FeedUser")))
(def flag (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Flag")))
(def form (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Form")))
(def form-button (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormButton")))
(def form-checkbox (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormCheckbox")))
(def form-dropdown (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormDropdown")))
(def form-field (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormField")))
(def form-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormGroup")))
(def form-input (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormInput")))
(def form-radio (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormRadio")))
(def form-select (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormSelect")))
(def form-text-area (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "FormTextArea")))
(def grid (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Grid")))
(def grid-column (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "GridColumn")))
(def grid-row (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "GridRow")))
(def header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Header")))
(def header-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "HeaderContent")))
(def header-subheader (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "HeaderSubheader")))
(def icon (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Icon")))
(def icon-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "IconGroup")))
(def image (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Image")))
(def image-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ImageGroup")))
(def input (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Input")))
(def item (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Item")))
(def item-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ItemContent")))
(def item-description (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ItemDescription")))
(def item-extra (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ItemExtra")))
(def item-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ItemGroup")))
(def item-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ItemHeader")))
(def item-image (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ItemImage")))
(def item-meta (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ItemMeta")))
(def label (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Label")))
(def label-detail (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "LabelDetail")))
(def label-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "LabelGroup")))
(def list (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "List")))
(def list-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ListContent")))
(def list-description (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ListDescription")))
(def list-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ListHeader")))
(def list-icon (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ListIcon")))
(def list-item (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ListItem")))
(def list-list (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ListList")))
(def loader (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Loader")))
(def menu (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Menu")))
(def menu-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "MenuHeader")))
(def menu-item (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "MenuItem")))
(def menu-menu (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "MenuMenu")))
(def message (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Message")))
(def message-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "MessageContent")))
(def message-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "MessageHeader")))
(def message-item (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "MessageItem")))
(def message-list (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "MessageList")))
(def modal (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Modal")))
(def modal-actions (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ModalActions")))
(def modal-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ModalContent")))
(def modal-description (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ModalDescription")))
(def modal-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "ModalHeader")))
(def popup (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Popup")))
(def popup-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "PopupContent")))
(def popup-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "PopupHeader")))
(def portal (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Portal")))
(def progress (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Progress")))
(def radio (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Radio")))
(def rail (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Rail")))
(def rating (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Rating")))
(def rating-icon (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "RatingIcon")))
(def reveal (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Reveal")))
(def reveal-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "RevealContent")))
(def search (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Search")))
(def search-category (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "SearchCategory")))
(def search-result (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "SearchResult")))
(def search-results (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "SearchResults")))
(def segment (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Segment")))
(def segment-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "SegmentGroup")))
(def select (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Select")))
(def sidebar (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Sidebar")))
(def sidebar-pushable (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "SidebarPushable")))
(def sidebar-pusher (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "SidebarPusher")))
(def statistic (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Statistic")))
(def statistic-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "StatisticGroup")))
(def statistic-label (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "StatisticLabel")))
(def statistic-value (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "StatisticValue")))
(def step (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Step")))
(def step-content (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "StepContent")))
(def step-description (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "StepDescription")))
(def step-group (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "StepGroup")))
(def step-title (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "StepTitle")))
(def table (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "Table")))
(def table-body (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "TableBody")))
(def table-cell (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "TableCell")))
(def table-footer (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "TableFooter")))
(def table-header (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "TableHeader")))
(def table-header-cell (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "TableHeaderCell")))
(def table-row (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "TableRow")))
(def text-area (r/adapt-react-class (aget js/window "deps" "SemanticUiReact" "TextArea")))
