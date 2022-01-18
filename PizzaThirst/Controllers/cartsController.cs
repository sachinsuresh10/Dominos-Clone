using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using PizzaThirst.Models;

namespace PizzaThirst.Controllers
{
    public class cartsController : ApiController
    {
        private PizzaThirstEntities db = new PizzaThirstEntities();

        // GET: api/carts
        public IQueryable<cart> Getcarts()
        {
            return db.carts;
        }

        // GET: api/carts/5
        [ResponseType(typeof(cart))]
        public async Task<IHttpActionResult> Getcart(int id)
        {
            cart cart = await db.carts.FindAsync(id);
            if (cart == null)
            {
                return NotFound();
            }

            return Ok(cart);
        }

        // PUT: api/carts/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putcart(int id, cart cart)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cart.cartid)
            {
                return BadRequest();
            }

            db.Entry(cart).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!cartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/carts
        [ResponseType(typeof(cart))]
        public async Task<IHttpActionResult> Postcart(cart cart)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.carts.Add(cart);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = cart.cartid }, cart);
        }

        // DELETE: api/carts/5
        [ResponseType(typeof(cart))]
        public async Task<IHttpActionResult> Deletecart(int id)
        {
            cart cart = await db.carts.FindAsync(id);
            if (cart == null)
            {
                return NotFound();
            }

            db.carts.Remove(cart);
            await db.SaveChangesAsync();

            return Ok(cart);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool cartExists(int id)
        {
            return db.carts.Count(e => e.cartid == id) > 0;
        }
    }
}