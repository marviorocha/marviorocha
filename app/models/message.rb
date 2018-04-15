class Message < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   length: { in: 10..5000 }
  attribute :fone
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Site: MarvioRocha.Com",
      :to => "marviorocha@marviorocha.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
