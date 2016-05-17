class HomesController < ApplicationController
  def show
  	@visits = Visit.all
  end

  def charts
    @visits = Visit.all
    @books = Book.all
    @book_test = Book.find(1)
  end

  def zoom
  	render 'dollar.html'
  end
end
