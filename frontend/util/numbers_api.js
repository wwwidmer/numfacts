export const fetchData = (number, type, ctx) => {
  let url = 'http://numbersapi.com/' + number + '/' + type;

  $.get(url, function(data) {
    ctx.setState({
      data: data
    })
    ctx.props.saveSearch([data]);
  });
}

export const fetchRandomData = (ctx) => {
  let url = 'http://numbersapi.com/random?min=1&max=100'

  $.get(url, function(data) {
    let number = parseInt(data.split(" ")[0]);
    ctx.setState({
      number: number,
      data: data
    })
    ctx.props.saveSearch([data]);
  });

}
