// Elements and helpers for the SearchView.zip sample app

class Search {
    /** Grabs the main keyboard element */
    get keyboard() {
        return $('#keyboard');
    }

    /** Grabs the spinner used to display a loading state */
    get spinner() {
        return $('#spinner');
    }

    /** Grabs the no results found label */
    get noResultsLabel() {
        return $('#noResultsLabel');
    }

    get resultRows() {
        return $$('//LayoutGroup[@name="layout"]/ZoomRowList/RenderableNode');
    }

    async getTileInRow(rowIndex: number, itemIndex: number) {
        return (await $(`//LayoutGroup[@name="layout"]/ZoomRowList/RenderableNode[${rowIndex}]/Row/StandardGridItemComponent[${itemIndex}]`));
    }
}

export default new Search();
