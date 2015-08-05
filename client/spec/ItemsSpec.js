describe("Items Collection", function() {

  beforeEach(function() {
    var items = new Items(md.items);
  });

  it("Should return a matrix for the collection that represents the items", function() {
    
    var matrix = items.matrix();
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

});