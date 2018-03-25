export const fetchData = (number, type, ctx) => {
  // Since we're in ES6 you should use const over let, unless you plan
  // on mutating this value. I won't mention it elsewhere.
  // On ES6 notes, you can template a string. Note the backticks below.
  // `http://numbersapi.com/${number}/${type}`
  let url = 'http://numbersapi.com/' + number + '/' + type;

  $.get(url, function(data) {
    ctx.setState({
      // Another ES6 goody - you can just used named construction
      // { data: data } === { data }
      data: data
    })
    ctx.props.saveSearch([data]);
  });
}

export const fetchRandomData = (ctx) => {
  // Great that you realized this method existed in this API
  let url = 'http://numbersapi.com/random?min=1&max=100'

  $.get(url, function(data) {
    let number = parseInt(data.split(" ")[0]);
    /* This gets the job done but I have an issue with it.
    *  If I wanted to test just this function it depends on a object (in your use, a React.Component)
    *  This makes any reuse of this function tied to a component that must be connected to a redux store
    *  This introduces three layers to testing a function that basically only does one thing.
    *     - Possible solution: Instead of passing a component (ctx) change the argument to a callback function
    *        and pass that function as the second param to $.get. Then when using this function you can pass something like...
    *     data => {
    *       let number = ...
    *       this.setState({...})
    *       this.props.saveSearch(...)
    *     }
    */
    ctx.setState({
      number: number,
      data: data
    })
    ctx.props.saveSearch([data]);
  });

}
