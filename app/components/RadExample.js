export default {
  template: `
  <Page>
    <StackLayout>
      <RadListView for="item in itemList"
                   layout="grid"
                   itemHeight="100">
        <v-template>
          <StackLayout orientation="vertical">
            <Label :text="item.name"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
  `,
  data() {
    return {
      itemList: [
        {name: 'Item 1', description: 'Item 1 description'},
        {name: 'Item 2', description: 'Item 2 description'},
        {name: 'Item 3', description: 'Item 3 description'},
      ],
    };
  },
};